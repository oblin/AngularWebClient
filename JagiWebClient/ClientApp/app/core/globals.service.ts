import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class Globals {
    private dateFormat = "YYYY/MM/DD";

    public dateFormatter(s: string): string {
        if (s == null) return "";

        if (s.length == 0 || s.length < 6) return "";

        if (s.length == 6) {
            var result = this.dealSlashDate(s);
            if (result.length == 10)
                return result;
            // 處理 990101
            s = '0' + s;
        }
        if (s.length == 7) {
            var result = this.dealSlashDate(s);
            if (result.length == 10)
                return result;
            // 處理 0990101 or 1031201
            var y = parseInt(s.substr(0, 3), 10) + 1911;
            var m = parseInt(s.substr(3, 2), 10);
            var d = parseInt(s.substr(5, 2), 10);
            var date = y + "/" + m + "/" + d;
            //if (moment(date).isValid()) {
            //    var returnDate = moment(date).format(dateFormat);
            //    var stringDate = returnDate.toString();
            //    return stringDate;
            //}
            //else
            //    return "";
            return this.getDateString(date);
        }
        if (s.length == 8 || s.length == 9) {
            var result = this.dealSlashDate(s);
            if (result.length == 10)
                return result;
        }

        return this.getDateString(s);
    }

    private dealSlashDate(s): string {
        if (s.indexOf('/') > -1) {
            var array = s.split('/');
            if (array.length == 3) {
                var y = parseInt(array[0]) + 1911;
                var m = parseInt(array[1], 10);
                var d = parseInt(array[2], 10);
                var date = y + "/" + m + "/" + d;
                return this.getDateString(date);
            }
        }
        return s;
    }

    private getDateString(s): string {
        if (moment(s).isValid()) {
            var returnDate = moment(s).format(this.dateFormat);
            var stringDate = returnDate.toString();
            return stringDate;
        } else {
            return "";
        }
    }
}
