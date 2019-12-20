import appServer from './svc/app';
import * as path from 'path';

/**
 * Firstly, tell Express where the root is for the UI.
 * Secondly, start the Express server.
 */

appServer.setStatic(path.join(__dirname, 'ui'));
appServer.setDefault(path.join(__dirname, 'ui', 'index.html'));

appServer.start(parseInt(process.env.PORT) || 3000);
