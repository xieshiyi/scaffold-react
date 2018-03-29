import DBF from './dbFactory'

export default DBF;

let prefix = ''
if (__LOCAL__) {
    prefix = ''
}
if (__PRO__) {
    prefix = ''
}

 // 举个栗子
DBF.create('demo',{
    demo:{
      url: prefix + '/demo',
      method:'GET'
    }
});



