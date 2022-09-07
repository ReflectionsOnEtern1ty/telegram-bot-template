import { CommandContext, Context } from 'grammy';

export const startCommand = (ctx: CommandContext<Context>) => {
  ctx.reply(`Hello, ${ctx.from.first_name}!`);
};
