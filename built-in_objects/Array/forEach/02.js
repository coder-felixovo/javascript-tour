// 除非抛出异常，否则没有办法停止或中断forEach循环

const arr = [1, 2, 3]
try {
  arr.forEach(e => {
    console.log(e)
    if (e === 1) {
      throw new Error('抛出异常终止forEach循环')
    }
  })
} catch(e) {
  console.log('已终止forEach循环')
}