async function bubbleSortTest() {
    // console.log(delay_time);
    for (var i = 0; i < arr_size - 1; i++) {
      for (var j = 0; j < arr_size - i - 1; j++) {
        if(stopProcess) break;
     
        await div_update_delay(divs[j], div_sizes[j], "black");
  
        if (div_sizes[j] > div_sizes[j + 1]) {
          await div_update_delay(divs[j], div_sizes[j], "azure");
          div_update(divs[j + 1], div_sizes[j + 1], "black");
  
          var temp = div_sizes[j];
          div_sizes[j] = div_sizes[j + 1];
          div_sizes[j + 1] = temp;
  
          await div_update_delay(divs[j], div_sizes[j], "rgb(234, 240, 44)");
          await div_update_delay(divs[j + 1], div_sizes[j + 1], "rgb(234, 240, 44)");
        }
        div_update(divs[j], div_sizes[j], "blue");
      }
      div_update(divs[j], div_sizes[j], "  rgb(59, 230, 213)");
    }
    div_update(divs[0], div_sizes[0], "  rgb(59, 230, 213)");
  
    
    console.log('sortDone');
    stopProcess=false;
    enable_buttons();
  }