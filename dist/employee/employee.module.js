"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModule = void 0;
const common_1 = require("@nestjs/common");
const employee_controller_1 = require("./employee.controller");
const employee_service_1 = require("./employee.service");
const EmployeeEntity_1 = require("../TypeOrms/EmployeeEntity");
const typeorm_1 = require("@nestjs/typeorm");
const AppointmentEntity_1 = require("../TypeOrms/AppointmentEntity");
const SalonEntity_1 = require("../TypeOrms/SalonEntity");
let EmployeeModule = exports.EmployeeModule = class EmployeeModule {
};
exports.EmployeeModule = EmployeeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([EmployeeEntity_1.EmployeeEntity, AppointmentEntity_1.AppointmentEntity, SalonEntity_1.SalonEntity])],
        controllers: [employee_controller_1.EmployeeController],
        providers: [employee_service_1.EmployeeService]
    })
], EmployeeModule);
//# sourceMappingURL=employee.module.js.map