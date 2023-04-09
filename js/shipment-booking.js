function getFormValues() 
{
    var originAddressList = [];
    var letters = /^[A-Za-z]+$/;
    const bookingName = document.getElementById("booking-name").value;
    if (bookingName == null || bookingName == "")
    {  
        alert("Booking Name cannot be blank");
        return false;
    }
    if (!bookingName.match(letters)) 
    {
        alert("Please enter a valid input -> (Booking Name)");
        return false;
    }

    const consigneeDropdown = document.getElementById("consignee-dropdown").value;
    if (consigneeDropdown == null || consigneeDropdown == "")
    {  
        alert("Please Select a Consignee");
        return false;
    }

    const supplierDropdown = document.getElementById("supplier-dropdown").value;
    if (supplierDropdown == null || supplierDropdown == "")
    {  
        alert("Please Select a Supplier");
        return false;
    }

    var radios = document.getElementsByName('btnradio');
    var incotermBlankCount = 0;
    var incoterm = "";
    for (var i = 0; i < 3; i++)
    {
        if (!radios[i].checked)
        {
            incotermBlankCount++;
        }
        else
        incoterm = radios[i].value;
    }   
    if(incotermBlankCount>=3)
    {
        alert("Please Select an Incoterm");
        return false;
    }

    var digits =  /^[1-9]\d*$/g ;
    var singleContainerFieldCount = 0;
    var manyContainersFieldCount = 0;


    totalWeight = document.getElementById("ltc-total-weight").value;

    if (!totalWeight.match(digits)) 
    {
        alert("Please enter a valid input -> (Total Weight)");
        return false;
    }
    else
    {
        singleContainerFieldCount++;
    }
    
    const packageTypeDropdown = document.getElementById("ltc-package-dropdown").value;
    if (packageTypeDropdown == null || packageTypeDropdown == "")
    {  
        alert("Please Select a Package Type");
        return false;
    }
    else
    {
        singleContainerFieldCount++;
    }

    totalVolume = document.getElementById("ltc-total-volume").value;

    if (!totalVolume.match(digits)) 
    {
        alert("Please enter a valid input -> (Total Volume)");
        return false;
    }
    else
    {
        singleContainerFieldCount++;
    }

    totalQuantity = document.getElementById("ltc-total-qty").value;

    if (!totalVolume.match(digits)) 
    {
        alert("Please enter a valid input -> (Total Quantity)");
        return false;
    }
    else
    {
        singleContainerFieldCount++;
    }


    numberOfContainers = document.getElementById("num-of-containers").value;

    if (!numberOfContainers.match(digits) && singleContainerFieldCount==0) 
    {
        alert("Please enter a valid input -> (Number of Containers)");
        return false;
    }
    else if(numberOfContainers.match(digits))
    {
        manyContainersFieldCount++;
    }

    const fcPackageTypeDropdown = document.getElementById("fc-package-dropdown").value;
    if ((fcPackageTypeDropdown == null || fcPackageTypeDropdown == "") && singleContainerFieldCount==0)
    {  
        alert("Please Select a Package Type");
        return false;
    }
    else if(!(fcPackageTypeDropdown == null || fcPackageTypeDropdown == ""))
    {
        manyContainersFieldCount++;
    }

    fcTotalWeight = document.getElementById("fc-total-weight").value;

    if (!fcTotalWeight.match(digits) && singleContainerFieldCount==0) 
    {
        alert("Please enter a valid input -> (Total Weight)");
        return false;
    }
    else if(fcTotalWeight.match(digits))
    {
        manyContainersFieldCount++;
    }

    fcTotalVolume = document.getElementById("fc-total-volume").value;

    if (!fcTotalVolume.match(digits) && singleContainerFieldCount==0) 
    {
        alert("Please enter a valid input -> (Total Volume)");
        return false;
    }
    else if(fcTotalVolume.match(digits))
    {
        manyContainersFieldCount++;
    }

    const containerTypeDropdown = document.getElementById("container-type-dropdown").value;
    if ((containerTypeDropdown == null || containerTypeDropdown == "") && singleContainerFieldCount==0)
    {  
        alert("Please Select a Container Type");
        return false;
    }
    else if(!(containerTypeDropdown == null || containerTypeDropdown == ""))
    {
        manyContainersFieldCount++;
    }

    fcTotalQuantity = document.getElementById("fc-total-qty").value;

    if (!fcTotalQuantity.match(digits) && singleContainerFieldCount==0)
    {
        alert("Please enter a valid input -> (Total Quantity)");
        return false;
    }
    else if(fcTotalQuantity.match(digits))
    {
        manyContainersFieldCount++;
    }

    

    if(singleContainerFieldCount>0 && manyContainersFieldCount>0)
    {
        alert("Ambiguous Data Entered. Please fill data in either 'Less than Container' or 'Full Containers' Section ");
        return false;
    }


    const originAddressDropdown = document.getElementById("origin-address").value;
    if (originAddressDropdown == null || originAddressDropdown == "")
    {  
        alert("Please Select an Origin Address");
        return false;
    }

    // originAddressList.forEach(OriginAddressFunc);      SKIP SKIP SKIP
    // flag = 0;
    // function OriginAddressFunc(item) 
    // {
    //     flag = (originAddressDropdown==item);
    // }
    // if(!flag)
    // {  
    //     alert("Please Select a valid Origin Address");
    //     return false;
    // }

    const portDropdown = document.getElementById("port-dropdown").value;
    if (portDropdown == null || portDropdown == "")
    {  
        alert("Please Select a Port");
        return false;
    }

    var flexportRadios = document.getElementsByName('flexport-radio');
    var flexportBlankCount = 0;
    var flexportChoice = "";
    for (var i = 0; i < 2; i++)
    {
        if (!flexportRadios[i].checked)
        {
            flexportBlankCount++;
        }
        else
        flexportChoice = flexportRadios[i].value;
    }   
    if(flexportBlankCount>=2)
    {
        alert("Please Select a choice for Flexport Services");
        return false;
    }

    const destinationAddressDropdown = document.getElementById("destination-address-dropdown").value;
    if (destinationAddressDropdown == null || destinationAddressDropdown == "")
    {  
        alert("Please Select a Destination Address");
        return false;
    }

    var productCheckbox = document.getElementsByName('product-check');
    var productCheckBlankCount = 0;
    var productContent = [];
    var productCheckIndex = 0;
    for (var i = 0; i < 4; i++)
    {
        if (!productCheckbox[i].checked)
        {
            productCheckBlankCount++;
        }
        else
        {
            productContent[productCheckIndex] = productCheckbox[i].value;
            productCheckIndex++;
        }
    }   
    if(productCheckBlankCount>=4)
    {
        alert("Please Confirm your Product contents");
        return false;
    }

    console.log("Booking Name: "+ bookingName);
    console.log("Consignee: " + consigneeDropdown);
    console.log("Supplier: " + supplierDropdown);
    console.log("Incoterm: " + incoterm);
    console.log("Total Weight: " + totalWeight);
    console.log("Package Type: " + packageTypeDropdown);
    console.log("Total Volume: " + totalVolume);
    console.log("Total Quantity: " + totalQuantity);
    console.log("Origin Address: " + originAddressDropdown);
    console.log("Port: " + portDropdown);
    console.log("Whether Opted for Flexport Service: " + flexportChoice);
    console.log("Destination Address: " + destinationAddressDropdown);
    console.log("Product Contains: " + productContent);

}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() 
// {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

function filterFunction() 
{
    var originAddressList = [];
    var originAddress, filter, a, i;
    originAddress = document.getElementById("origin-address");
    filter = originAddress.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");

    for (i = 0; i < a.length; i++) 
    {
        originAddressList[i] = a[i].text;
    }

    for (i = 0; i < a.length; i++) 
    {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) 
        {
            a[i].style.display = "";
            // filteredData[index++] = a[i];
            originAddress.value=a[i].text;
        } 
        else 
        {
            a[i].style.display = "none";
        }
    }
    // document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
} 
