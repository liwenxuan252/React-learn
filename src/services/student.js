export async function getAllStudent(){
    const appkey = 'demo13_1545210570249';
    return await fetch(`http://api.duyiedu.com/api/student/findAll?appkey=${appkey}`)
                .then(resp => resp.json()).then(resp => resp.data)
}