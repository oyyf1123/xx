const events = require('events')


const EventEmitter = events.EventEmitter



const app = EventEmitter.prototype

console.log( app )


// app.on(事件名称，事件处理程序)
app.on('aa',function () { //事件发布
    console.log('aa')
})


// app.emit(事件名称)

app.emit('aa')