"use strict";
var photo_booth_photo_service_1 = require('./photo-booth-photo.service');
var PhotoStrip = (function () {
    function PhotoStrip() {
        var strip = new Array();
        strip[0] = new photo_booth_photo_service_1.Photo();
        strip[1] = new photo_booth_photo_service_1.Photo();
        strip[2] = new photo_booth_photo_service_1.Photo();
        this.strip = strip;
        this._nextEmptyPhoto = 0;
    }
    Object.defineProperty(PhotoStrip.prototype, "strip", {
        get: function () {
            return this._strip;
        },
        set: function (strip) {
            this._strip = strip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhotoStrip.prototype, "selectedPhoto", {
        get: function () {
            return this._selectedPhoto;
        },
        set: function (newSelectedPhoto) {
            this._selectedPhoto = newSelectedPhoto;
        },
        enumerable: true,
        configurable: true
    });
    PhotoStrip.prototype.setNextEmptyPhoto = function (photoSrc) {
        var nextEmpty = this.getNextEmptyPhotoNumber();
        if (nextEmpty !== -1) {
            this.strip[nextEmpty].photoSrc = photoSrc;
            this.strip[nextEmpty].originalPhotoSrc = photoSrc;
        }
        return nextEmpty;
    };
    PhotoStrip.prototype.getNextEmptyPhotoNumber = function () {
        for (var i = 0; this._strip.length > i; i++) {
            if (this.strip[i].photoSrc === '') {
                return i;
            }
        }
        return -1;
    };
    PhotoStrip.prototype.resetStrip = function () {
        for (var i = 0; this._strip.length > i; i++) {
            this.strip[i].resetPhoto();
        }
    };
    return PhotoStrip;
}());
exports.PhotoStrip = PhotoStrip;
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvcGhvdG8tYm9vdGgtcGhvdG8tc3RyaXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQW9CLDZCQUE2QixDQUFDLENBQUE7QUFFbEQ7SUFLQztRQUNDLElBQUksS0FBSyxHQUFpQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLGlDQUFLLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxpQ0FBSyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksaUNBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxzQkFBSSw2QkFBSzthQUFUO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEIsQ0FBQzthQUNELFVBQVcsS0FBbUI7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQzs7O09BSEE7SUFJRCxzQkFBSSxxQ0FBYTthQUdqQjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzVCLENBQUM7YUFMRCxVQUFvQixnQkFBd0I7WUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUtELHNDQUFpQixHQUFqQixVQUFtQixRQUFnQjtRQUNsQyxJQUFJLFNBQVMsR0FBVSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUN0RCxFQUFFLENBQUEsQ0FBRSxTQUFTLEtBQUssQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsNENBQXVCLEdBQXZCO1FBQ0MsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLEVBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0YsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCwrQkFBVSxHQUFWO1FBQ0MsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNGLENBQUM7SUFDRixpQkFBQztBQUFELENBL0NBLEFBK0NDLElBQUE7QUEvQ1ksa0JBQVUsYUErQ3RCLENBQUE7QUFBQSxDQUFDIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvcGhvdG8tYm9vdGgtcGhvdG8tc3RyaXAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGhvdG99IGZyb20gJy4vcGhvdG8tYm9vdGgtcGhvdG8uc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhvdG9TdHJpcCB7XHJcblx0cHJpdmF0ZSBfc3RyaXA6IEFycmF5PFBob3RvPjtcclxuXHRwcml2YXRlIF9zZWxlY3RlZFBob3RvOiBudW1iZXI7XHJcblx0Ly90ZWxscyB3aGljaCBpcyB0aGUgbmV4dCBlbXB0eSBwaG90byBpbiB0aGUgc3RyaXBcclxuXHRwcml2YXRlIF9uZXh0RW1wdHlQaG90bzogbnVtYmVyO1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dmFyIHN0cmlwOiBBcnJheTxQaG90bz4gPSBuZXcgQXJyYXkoKTtcclxuXHRcdHN0cmlwWzBdID0gbmV3IFBob3RvKCk7XHJcblx0XHRzdHJpcFsxXSA9IG5ldyBQaG90bygpO1xyXG5cdFx0c3RyaXBbMl0gPSBuZXcgUGhvdG8oKTtcclxuXHRcdHRoaXMuc3RyaXAgPSBzdHJpcDtcclxuXHRcdHRoaXMuX25leHRFbXB0eVBob3RvID0gMDtcclxuXHR9XHJcblx0Z2V0IHN0cmlwKCk6IEFycmF5PFBob3RvPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc3RyaXA7XHJcblx0fVxyXG5cdHNldCBzdHJpcCggc3RyaXA6IEFycmF5PFBob3RvPiApIHtcclxuXHRcdHRoaXMuX3N0cmlwID0gc3RyaXA7XHJcblx0fVxyXG5cdHNldCBzZWxlY3RlZFBob3RvICggbmV3U2VsZWN0ZWRQaG90bzogbnVtYmVyICkge1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRQaG90byA9IG5ld1NlbGVjdGVkUGhvdG87XHJcblx0fVxyXG5cdGdldCBzZWxlY3RlZFBob3RvKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWRQaG90bztcclxuXHR9XHJcblx0Ly9yZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgcGhvdG8gaXQgc2V0XHJcblx0c2V0TmV4dEVtcHR5UGhvdG8oIHBob3RvU3JjOiBzdHJpbmcgKTogbnVtYmVyIHtcclxuXHRcdHZhciBuZXh0RW1wdHk6bnVtYmVyID0gdGhpcy5nZXROZXh0RW1wdHlQaG90b051bWJlcigpO1xyXG5cdFx0aWYoIG5leHRFbXB0eSAhPT0gLTEgKSB7XHJcblx0XHRcdHRoaXMuc3RyaXBbbmV4dEVtcHR5XS5waG90b1NyYyA9IHBob3RvU3JjO1xyXG5cdFx0XHR0aGlzLnN0cmlwW25leHRFbXB0eV0ub3JpZ2luYWxQaG90b1NyYyA9IHBob3RvU3JjO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5leHRFbXB0eTtcclxuXHR9XHJcblx0Z2V0TmV4dEVtcHR5UGhvdG9OdW1iZXIoKTogbnVtYmVyIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyB0aGlzLl9zdHJpcC5sZW5ndGggPiBpOyBpKyspIHtcclxuXHRcdFx0aWYgKCB0aGlzLnN0cmlwW2ldLnBob3RvU3JjID09PSAnJyApIHtcclxuXHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH1cclxuXHRyZXNldFN0cmlwKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IHRoaXMuX3N0cmlwLmxlbmd0aCA+IGk7IGkrKykge1xyXG5cdFx0XHR0aGlzLnN0cmlwW2ldLnJlc2V0UGhvdG8oKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbiJdfQ==
