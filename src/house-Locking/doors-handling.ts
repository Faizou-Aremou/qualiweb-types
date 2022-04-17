export class door {
  private _lock: Lock | null = null;
  public get lock(): Lock | null {
    return this._lock;
  }
  public set lock(value: Lock | null) {
    this._lock = value;
  }
  private _type: DoorType = DoorType.SlidingDoor;
  public get type(): DoorType {
    return this._type;
  }
  public set type(value: DoorType) {
    this._type = value;
  }
  private width: number = 0;
  private height: number = 0;
}

export class Lock {}

export enum DoorType {
  SlidingDoor = "SlidingDoor",
  SwingDoor = "SwingDoor",
  SwivelDoor = "SwivelDoor",
  FoldingDoor = "FoldingDoor",
}
