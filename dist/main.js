"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const cookieParser = require("cookie-parser");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./modules/app.module");
const routeListEnum_1 = require("./const/routeListEnum");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        credentials: true,
    });
    app.use(cookieParser());
    app.setGlobalPrefix(routeListEnum_1.routeListEnum.API_START_NOTATION);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API Documentation')
        .setDescription('JWT Token')
        .setVersion('1.0')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map