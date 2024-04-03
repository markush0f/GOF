import { DjangoFactory } from "./DjangoFactory";
import { FrameworkFactory } from "./FrameworkFactory";
import { NestJsFactory } from "./NestJSFactory";

const django = FrameworkFactory.getFramework(new DjangoFactory("Python", "2.7", "https://www.djangoproject.com/"))
const nestjs = FrameworkFactory.getFramework(new NestJsFactory("TypeScript/JavaScript", "3.6", "https://nestjs.com/"))
console.log("AbstractFactory Django: \n", django.toString());
console.log("\nAbstractFactory Django: \n", nestjs.toString());
