"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Water Resource Management API')
        .setDescription('API pour la gestion des ressources hydriques')
        .setVersion('1.0')
        .addTag('source-types')
        .addTag('capture-points')
        .addTag('usage-reports')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3005);
    console.log('========================================');
    console.log('✅ Application running on: http://localhost:3005');
    console.log('📚 Swagger docs: http://localhost:3005/api');
    console.log('========================================');
}
bootstrap().catch(err => {
    console.error('❌ Error starting application:', err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map