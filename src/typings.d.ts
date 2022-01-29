/**
 * This is required to allow TypeScript to see .riot files as modules
 */
declare module '*.riot' {
  import {RiotComponentShell} from 'riot';
  const componentShell: RiotComponentShell;

  export default componentShell
}

/**
 * Riot Route does not have typedefs
 */
declare module '@riotjs/route';

declare module 'swup';
