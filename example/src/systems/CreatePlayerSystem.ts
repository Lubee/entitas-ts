﻿module example {

  import Pool = entitas.Pool;
  import ISetPool = entitas.ISetPool;
  import IInitializeSystem = entitas.IInitializeSystem;


  export class CreatePlayerSystem implements IInitializeSystem, ISetPool {
    _pool:Pool;

    public setPool(pool:Pool) {
      this._pool = pool;
    }

    public initialize() {
      this._pool.createEntity()
        .addResource("Player")
        .addPosition(0, 0, 0)
        .addMove(0, 0.025)
        .setAcceleratable(true);
    }
  }

}