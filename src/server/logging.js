import { log, box } from '@clack/prompts';
import pc from 'picocolors';


export function assertFound(
    value,
    message,
    context
) {
    if (value === null || value === undefined) {
        const error = new Error(message);
        logServerError(error, { status: 404, ...context });
        throw error;
    }
}

export const logServerSuccess = (message, context = {}) => {
    const badge = pc.bgGreen(pc.white(pc.bold(' SUCCESS ')));
    const timestamp = pc.dim(new Date().toISOString());

    log.message(`${badge} ${pc.bold(message)} ${timestamp}`, {
        symbol: pc.green('■'),
        secondarySymbol: pc.green('│'),
    });
    if (context.route) {
        box(`${pc.dim('Operation:')}   ${pc.cyan(context.route)}`, pc.green('Context'), {
            rounded: true,
        });
    }
};

export const logServerError = (err, context = {}) => {
    const badge = pc.bgRed(pc.white(pc.bold(' ERROR ')));
    const timestamp = pc.dim(new Date().toISOString());

    log.message(`${badge} ${pc.bold(err.message)} ${timestamp}`, {
        symbol: pc.red('■'),
        secondarySymbol: pc.red('│'),
    });

    const details = [
        context.route && `${pc.dim('Operation:')}   ${pc.cyan(context.route)}`,
        context.status && `${pc.dim('Status:')}  ${pc.yellow(context.status)}`,
        err.stack && `\n${pc.dim(err.stack.split('\n').slice(1, 4).join('\n'))}`,
    ]
        .filter(Boolean)
        .join('\n');

    if (details) {
        box(details, pc.red('Stack & Context'), {
            rounded: true,
        });
    }
}