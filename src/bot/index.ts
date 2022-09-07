import {Bot} from 'grammy';
import { startCommand } from './commands/startCommand';

const token = process.env['BOT_TOKEN'];
if (!token) {
	throw new Error('You not provided the bot-token from @BotFather via environment variable (BOT_TOKEN)');
}

const bot = new Bot(token);

//Basic command
bot.command('start', async ctx => startCommand(ctx));

bot.catch(error => {
	console.error('ERROR on handling update occured', error);
});

export async function startBot(): Promise<void> {

	// Add telegram commands here
	await bot.api.setMyCommands([
		{command: 'start', description: 'Simple hello message'},
	]);

	await bot.start({
		onStart(botInfo) {
			console.log(new Date(), 'Bot starts as', botInfo.username);
		},
	});
}