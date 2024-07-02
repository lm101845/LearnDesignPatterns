/**
 * @Author liming
 * @Date 2024/7/2 12:18
 **/

Mediator.register('demo', function () {
    console.log('first')
})

Mediator.register('demo', function () {
    console.log('second')
})

Mediator.send('demo') // first second