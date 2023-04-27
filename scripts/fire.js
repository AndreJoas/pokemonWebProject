var $range = document.getElementById('hprange'),
    $value = document.getElementById('valorHp');

$range.addEventListener('hprange', function() {
  $value.textContent = this.value;
});