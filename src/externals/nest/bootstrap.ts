import { NestFactory } from "@nestjs/core";
import Module from "./module";

async function bootstrap() {
  const app = await NestFactory.create(Module);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}

export default bootstrap;
