// let enter = document.querySelector("#enter")
function countstarts(go){
    go()
}
function ten(go){
    enter.innerHTML = '10'
    // document.write('10')
    go()
}
function nine(go){
    enter.innerHTML = '9'
    go()
}
function eight(go){
    enter.innerHTML = '8'
    go()
}
function seven(go){
    enter.innerHTML = '7'
    go()
}
function six(go){
    enter.innerHTML = '6'
    go()
}
function five(go){
    enter.innerHTML = '5'
    go()
}
function four(go){
    enter.innerHTML = '4'
    go()
}
function three(go){
    enter.innerHTML = '3'
    go()
}
function two(go){
    enter.innerHTML = '2'
    go()
}
function one(go){
    enter.innerHTML = '1'
    go()
}
function wish(go){
    enter.innerHTML = 'Happy Independence Day'
    go()
}

countstarts(()=>{
    setTimeout(()=>{
        ten(()=>{
            setTimeout(()=>{
                nine(()=>{
                    setTimeout(()=>{
                        eight(()=>{
                            setTimeout(()=>{
                                seven(()=>{
                                    setTimeout(()=>{
                                        six(()=>{
                                            setTimeout(()=>{
                                                five(()=>{
                                                    setTimeout(()=>{
                                                        four(()=>{
                                                            setTimeout(()=>{
                                                                three(()=>{
                                                                    setTimeout(()=>{
                                                                        two(()=>{
                                                                            setTimeout(()=>{
                                                                                one(()=>{
                                                                                    setTimeout(()=>{
                                                                                        wish()
                                                                                    },2000)
                                                                                })
                                                                            },2000)
                                                                        })
                                                                    },2000)
                                                                })
                                                            },2000)
                                                        })
                                                    },2000)
                                                })
                                            },2000)
                                        })
                                    },2000)
                                })
                            },2000)
                        })
                    },2000)
                })
            },2000)
        })
    },2000)
})
