import { DjangoFactory } from "./factory/Django.factory";
import { FrameworkFactory } from "./factory/Framework.factory";
import { NestJsFactory } from "./factory/NestJS.factory";

const django = FrameworkFactory.getFramework(new DjangoFactory("Python", "2.7", "https://www.djangoproject.com/"))
const nestjs = FrameworkFactory.getFramework(new NestJsFactory("TypeScript/JavaScript", "3.6", "https://nestjs.com/"))
console.log("AbstractFactory Django: \n", django.toString());
console.log("\nAbstractFactory Django: \n", nestjs.toString());
