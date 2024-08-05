"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const envalid_1 = require("envalid");
exports.env = (0, envalid_1.cleanEnv)(process.env, {
    API_BASE_URL: (0, envalid_1.str)({ default: "https://the-one-api.dev/v2" }),
    API_KEY: (0, envalid_1.str)(),
    SERVER_PORT: (0, envalid_1.num)({ default: 3000 })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vudi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBNkM7QUFFaEMsUUFBQSxHQUFHLEdBQUcsSUFBQSxrQkFBUSxFQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7SUFDckMsWUFBWSxFQUFFLElBQUEsYUFBRyxFQUFDLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUM7SUFDNUQsT0FBTyxFQUFFLElBQUEsYUFBRyxHQUFFO0lBQ2QsV0FBVyxFQUFFLElBQUEsYUFBRyxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0NBQ3RDLENBQUMsQ0FBQyJ9