/* IMPORT */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
/* EXPRESS SEND STATUS */
function expressSendStatus(status, message) {
    return function (req, res) {
        if (_.isString(message)) {
            res.set('Content-Type', 'text/plain')
                .status(status)
                .send(message);
        }
        else {
            res.sendStatus(status);
        }
    };
}
/* EXPORT */
exports.default = expressSendStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsWUFBWTs7O0FBRVosMEJBQTRCO0FBRTVCLHlCQUF5QjtBQUV6QiwyQkFBNkIsTUFBYyxFQUFFLE9BQWdCO0lBRTNELE1BQU0sQ0FBQyxVQUFFLEdBQUcsRUFBRSxHQUFHO1FBRWYsRUFBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBRyxPQUFPLENBQUcsQ0FBQyxDQUFDLENBQUM7WUFFN0IsR0FBRyxDQUFDLEdBQUcsQ0FBRyxjQUFjLEVBQUUsWUFBWSxDQUFFO2lCQUNuQyxNQUFNLENBQUcsTUFBTSxDQUFFO2lCQUNqQixJQUFJLENBQUcsT0FBTyxDQUFFLENBQUM7UUFFeEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBRU4sR0FBRyxDQUFDLFVBQVUsQ0FBRyxNQUFNLENBQUUsQ0FBQztRQUU1QixDQUFDO0lBRUgsQ0FBQyxDQUFDO0FBRUosQ0FBQztBQUVELFlBQVk7QUFFWixrQkFBZSxpQkFBaUIsQ0FBQyJ9