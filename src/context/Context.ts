import { createContext } from 'react';

import { ContextModel } from '../models/context-model';

export const Context = createContext(new ContextModel());