describe("script test",function(){
    it('write test code here', function () {
        const data = "{+9.58 01}";
        function parse(data) {
            var result = parseFloat(data.split(" ")[0].substr(1));
            var interface_type = data.split(" ")[1].substr(0, 2);
            if(!result){
                return;
            }
            return {
                "空瓶重量":result
            };
        }
        expect(parse(data)).toEqual({
            "空瓶重量":9.58
        })
    });
})