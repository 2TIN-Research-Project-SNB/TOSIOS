export const APP_TITLE = 'TOSIOS';

// General
export const WS_PORT = 3001;
export const ROOM_NAME = 'game'; // Colyseus Room<T>'s name (no need to change)
export const ROOM_REFRESH = 3000;
export const PLAYERS_REFRESH = 1000;
export const DEBUG = false;

// Game
export const MAPS_NAMES = ['small', 'gigantic'];
export const ROOM_PLAYERS_MIN = 2;
export const ROOM_PLAYERS_MAX = 16;
export const ROOM_PLAYERS_SCALES = [2, 4, 8, 16];
export const ROOM_NAME_MAX = 16;
export const PLAYER_NAME_MAX = 16;
export const LOG_LINES_MAX = 5;
export const LOBBY_DURATION = 1000 * 10; // 10 seconds
export const GAME_DURATION = 1000 * 90; // 90 seconds

// Background
export const BACKGROUND_COLOR = '#25131A';

// Tiles
export const TILE_SIZE = 32;

// Players
export const PLAYER_SIZE = 24;
export const PLAYER_SPEED = 3;
export const PLAYER_MAX_LIVES = 5;
export const PLAYER_HURT_BACKOFF = 1000; // Time for which the user is invincible when hurt
export const PLAYER_WEAPON_SIZE = 12; // The bigger, the further away a bullet will be shot from.

// Monsters
export const MONSTER_SPEED_CHASE = 1.25;
export const MONSTER_SIGHT = TILE_SIZE * 4;
export const MONSTER_LIVES = 3;

// Props
export const PROP_LIVES = 3;
export const PROP_TRAP_START_DELAY = 800;
export const PROP_TRAP_HURT_DURATION = 500;
export const PROP_DROP_RADIUS = 32;
export const PROP_COIN_SIZE = 16;

// Bullets
export const BULLET_SIZE = 8;
export const BULLET_SPEED = 8;
export const BULLET_RATE = 400; // The bigger, the slower.
