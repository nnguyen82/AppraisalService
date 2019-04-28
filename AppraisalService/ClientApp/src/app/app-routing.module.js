"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var primeng_module_1 = require("./primeng.module");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var dash_board_component_1 = require("./dash-board/dash-board.component");
var task_component_1 = require("./task/task.component");
var workorder_component_1 = require("./workorder/workorder.component");
var vendor_component_1 = require("./vendor/vendor.component");
var statistic_component_1 = require("./statistic/statistic.component");
var routes = [
    { path: '', component: dash_board_component_1.DashBoardComponent, pathMatch: 'full' },
    { path: 'task', component: task_component_1.TaskComponent },
    { path: 'workorder', component: workorder_component_1.WorkOrderComponent },
    { path: 'vendor', component: vendor_component_1.VendorComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [
                nav_menu_component_1.NavMenuComponent,
                dash_board_component_1.DashBoardComponent,
                task_component_1.TaskComponent,
                workorder_component_1.WorkOrderComponent,
                vendor_component_1.VendorComponent,
                statistic_component_1.StatisticComponent
            ],
            imports: [
                primeng_module_1.PrimeNgModule,
                common_1.CommonModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule,
                primeng_module_1.PrimeNgModule,
                nav_menu_component_1.NavMenuComponent,
                dash_board_component_1.DashBoardComponent,
                task_component_1.TaskComponent,
                workorder_component_1.WorkOrderComponent,
                common_1.CommonModule,
                vendor_component_1.VendorComponent,
                statistic_component_1.StatisticComponent
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map