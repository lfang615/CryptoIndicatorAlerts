import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { map, catchError } from 'rxjs/operators';
import * as socketIo from 'socket.io-client';

@Injectable()
export class WebsocketService {
  constructor() {}
}
