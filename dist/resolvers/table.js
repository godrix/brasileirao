"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
const http_1 = require("../data/datasource/http");
const services_1 = require("../services");
const table = (liga) => __awaiter(void 0, void 0, void 0, function* () {
    const promises = [
        (0, http_1.TableService)('GE', liga),
        (0, http_1.TableService)('CNN', liga)
    ];
    const result = yield Promise.any(promises);
    const table = (0, services_1.extractedData)(result.data, result.provider);
    return table;
});
exports.table = table;
