interface GameConfig {
  startTime: number;
  soundEnabled: boolean;
  musicPlaying: boolean;
}

const DefaultGameConfig: GameConfig = {
  startTime: Date.now(),
  soundEnabled: false,
  musicPlaying: false,
};

export const GameConfig: GameConfig = DefaultGameConfig;
