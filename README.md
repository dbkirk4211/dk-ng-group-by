# AngularJS Filter - Group By

Order an array by a specified value from the array's contents.

### Usage
##### In HTML Template Binding
```
{{ groupBy_expression | dkGroupBy : id : key_expression}}
```

##### In JavaScript
```
$filter('dkOrderBy')(array, id, key_expression)
```

##### Returns
```
Object(group_name, group_entries)
```

### Example

```
[{
  make: "Ford",
  model: "C-Max",
  type: "Hybrid",
  max_p: 5
},{
  make: "Tesla",
  model: "Model X",
  type: "SUV",
  max_p: 5
},{
  make: "Tesla",
  model: "Model S",
  type: "Sedan",
  max_p: 5
},{
  make: "Ford",
  model: "Taurus",
  type: "Sedan",
  max_p: 5
},{
  make: "Tesla",
  model: "Model 3",
  type: "Mid-Size Sedan",
  max_p: 5
}]
```

```
<div ng-repeat="(make, vehicles) in vehicles | orderBy : 'make' | groupBy : this.$id : 'make'">
  <h3>{{make}}</h3>
  <table>
    <tr>
      <th>Model</th>
      <th>Type</th>
      <th>Max Passengers</th>
    </tr>
    <tr ng-repeat="vehicle in vehicles | orderBy: 'model'">
      <td>{{vehicle.model}}</td>
      <td>{{vehicle.type}}</td>
      <td>{{vehicle.max_p}}</td>
    </tr>
  </table>
</div>
```

#### Ford
Model | Type | Max Passengers
----- | ---- | --------------
C-Max | Hybrid | 5
Taurus | Sedan | 5

#### Tesla
Modal | Type | Max Passengers
----- | ---- | --------------
Model X | SUV | 5
Model S | Sedan | 5
Model 3 | Mid-Size Sedan | 5
