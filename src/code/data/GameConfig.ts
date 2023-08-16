interface GameConfig {
  startTime: number;
}

const DefaultGameConfig: GameConfig = {
  startTime: Date.now(),
};

export const GameConfig: GameConfig = DefaultGameConfig;
