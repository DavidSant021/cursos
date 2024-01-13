function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            console.log('Resolvedo a promise...')
            resolve('resolvida')
        }, 1000 * 3)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 5)