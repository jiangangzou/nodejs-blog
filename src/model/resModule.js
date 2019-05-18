class BaseModule {
    constructor(data,message) {
        if(typeof data === 'string') {
            this.message = data
        }
        if(data) {
            this.data = data;
        }
        if(message) {
            this.message = message
        }
    }
}

class SuccessModel extends BaseModule {
    constructor(data,message) {
        super(data,message)
        this.errno = 0
    }
}

class ErrorModel extends BaseModule {
    constructor(data,message) {
        super(data,message)
        this.errno = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}