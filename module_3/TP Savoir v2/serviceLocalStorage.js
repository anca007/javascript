let servicelocalStorage =
    (
        function () {
            const key = 'knowledge';
            let serviceLocalStorage = {}

            serviceLocalStorage.save = function (data) {
                localStorage.setItem(key, JSON.stringify(data))
            }
            serviceLocalStorage.getData = function () {
               return JSON.parse(localStorage.getItem(key))
            }

        return serviceLocalStorage;

        }
    )()