angular.module('app').directive('uiSelectGroupSelectable', function () {
    return {
        restrict: 'A',
        priority: 0,
        scope: {
            uiSelectGroupSelectable: '&'
        },
        link: function ($scope, $element) {
            $scope.element = $element[0];

            // wait for children
            $scope.$watch('element.children.length', function (newValue) {
                if (newValue) {
                    // get all ui-select groups
                    const groups = $scope.element.querySelectorAll('.ui-select-choices-group-label');

                    if (groups.length > 0 && $scope.$parent.$select && $scope.$parent.$select.groups) {
                        for (let i = 0; i < groups.length; i++) {
                            const groupElement = angular.element(groups[i]);

                            // attach click event
                            groupElement.on('click', function (event) {
                                const group = $scope.$parent.$select.groups.find((item) => {
                                    return item.name === groupElement.text();
                                });

                                // select items from group
                                if (group && group.items.length) {
                                    group.items.forEach((item) => {
                                        $scope.$parent.$select.select(item, false, event);
                                    })
                                }

                            });
                        }
                    }
                }
            }, true);
        }
    };
});