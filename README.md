
# ui-select-group-selectable

AngularJS directive for update ui-select:
make groups header selectable (select all group items)

**Only for bootstrap theme**

## Hot to use
Add `ui-select-group-selectable` attribute `ui-select-choices`

```html
  <ui-select multiple ng-model="selectModel" theme="bootstrap">  
    <ui-select-match placeholder="">{{$item.name}}</ui-select-match>  
    <ui-select-choices
      ui-select-group-selectable  
      group-by="'category_name'"  
      repeat="cat.id as cat in categories | filter: $select.search">  
      <div ng-bind-html="cat.name | highlight: $select.search"></div>  
    </ui-select-choices>
  </ui-select>
```
