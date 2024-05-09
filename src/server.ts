import express from 'express';
import routerUser from "./routes/routesUsers";
import routerGames from "./routes/routesGames";

const app = express();

app.use(express.json());

app.use('/api/v1', routerUser);
app.use('/api/v1', routerGames);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});