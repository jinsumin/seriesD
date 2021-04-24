const main = require('./main');

test(
    name = "test main.js sum()",
    function () {
        expect(main.sum(10, 20)).toBe(30);
    }
)

function testFunction(email) {
    if (typeof (email) !== "string") {
        return false;
    }
    if (!email.includes('@')) {
        return false;
    }
    if (!(email.includes('.com')) || email.includes('co.kr')) {
        return false;
    }
    return true;
}

test(
    name = 'test email form',
    function () {
        expect(testFunction('test@kakao.com')).toBe(true);
    }
)

test(
    name = 'test type error',
    function () {
        expect(testFunction(111)).toBe(false);
    }
)

test(
    name = 'test calculateSum',
    function () {
        expect(main.calculateSum(10)).toBe(45);
    }
)

test(
    name = 'test countBerry',
    function () {
        let fruitsBasket = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기'];
        expect(main.countBerry(fruitsBasket)).toBe(2);
    }
)

test(
    name = 'test countCity',
    function () {
        expect(main.selectCleanCity()).toEqual(
            ['중구', '종로구', '용산구', '광진구', '성동구', '노원구', '구로구', '양천구', '강동구']
        );
        main.printAir();
    }
)