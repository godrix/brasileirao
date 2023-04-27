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
exports.CNNTableService = void 0;
const constants_1 = require("../../../constants");
const services_1 = require("../../../services");
function CNNTableService(liga) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!constants_1.BASE_URL.TABLE.CNN.hasOwnProperty(liga)) {
                throw new Error('Não foi possível encontrar a tabela  para a liga selecionada');
            }
            const response = yield (0, services_1.request)(constants_1.BASE_URL.TABLE.CNN[liga]);
            return {
                data: response,
                provider: 'CNN'
            };
        }
        catch (error) {
            throw error;
        }
    });
}
exports.CNNTableService = CNNTableService;
