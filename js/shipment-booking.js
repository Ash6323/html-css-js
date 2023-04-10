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
    
    //Less than Container Fields
    const totalWeight = document.getElementById("ltc-total-weight").value;
    const packageTypeDropdown = document.getElementById("ltc-package-dropdown").value;
    const totalVolume = document.getElementById("ltc-total-volume").value;
    const totalQuantity = document.getElementById("ltc-total-qty").value;

    //Full Container Fields
    const numberOfContainers = document.getElementById("num-of-containers").value;
    const fcPackageTypeDropdown = document.getElementById("fc-package-dropdown").value;
    const fcTotalWeight = document.getElementById("fc-total-weight").value;
    const fcTotalVolume = document.getElementById("fc-total-volume").value;
    const containerTypeDropdown = document.getElementById("container-type-dropdown").value;
    const fcTotalQuantity = document.getElementById("fc-total-qty").value;

    //Counting Populated 'Full Container' Fields
    if(numberOfContainers.match(digits))
    {
        manyContainersFieldCount++;
    }
    if(!(fcPackageTypeDropdown == null || fcPackageTypeDropdown == ""))
    {
        manyContainersFieldCount++;
    }
    if(fcTotalWeight.match(digits))
    {
        manyContainersFieldCount++;
    }
    if(fcTotalVolume.match(digits))
    {
        manyContainersFieldCount++;
    }
    if(!(containerTypeDropdown == null || containerTypeDropdown == ""))
    {
        manyContainersFieldCount++;
    }
    if(fcTotalQuantity.match(digits))
    {
        manyContainersFieldCount++;
    }

    //'Less than Container' Fields Validation
    if (!totalWeight.match(digits) && manyContainersFieldCount==0) 
    {
        alert("Please enter a valid input -> (Total Weight)");
        return false;
    }
    else if(totalWeight.match(digits))
    {
        singleContainerFieldCount++;
    }

    if ((packageTypeDropdown == null || packageTypeDropdown == "") && manyContainersFieldCount==0)
    {  
        alert("Please Select a Package Type");
        return false;
    }
    else if(!(packageTypeDropdown == null || packageTypeDropdown == ""))
    {
        singleContainerFieldCount++;
    }

    if (!totalVolume.match(digits) && manyContainersFieldCount==0) 
    {
        alert("Please enter a valid input -> (Total Volume)");
        return false;
    }
    else if(totalVolume.match(digits))
    {
        singleContainerFieldCount++;
    }

    if (!totalQuantity.match(digits) && manyContainersFieldCount==0) 
    {
        alert("Please enter a valid input -> (Total Quantity)");
        return false;
    }
    else if(totalQuantity.match(digits))
    {
        singleContainerFieldCount++;
    }

    //'Full Container' Fields Validation
    if (!numberOfContainers.match(digits) && singleContainerFieldCount==0) 
    {
        alert("Please enter a valid input -> (Number of Containers)");
        return false;
    }
    else if(numberOfContainers.match(digits))
    {
        manyContainersFieldCount++;
    }


    if ((fcPackageTypeDropdown == null || fcPackageTypeDropdown == "") && singleContainerFieldCount==0)
    {  
        alert("Please Select a Package Type");
        return false;
    }
    else if(!(fcPackageTypeDropdown == null || fcPackageTypeDropdown == ""))
    {
        manyContainersFieldCount++;
    }


    if (!fcTotalWeight.match(digits) && singleContainerFieldCount==0) 
    {
        alert("Please enter a valid input -> (Total Weight)");
        return false;
    }
    else if(fcTotalWeight.match(digits))
    {
        manyContainersFieldCount++;
    }


    if (!fcTotalVolume.match(digits) && singleContainerFieldCount==0) 
    {
        alert("Please enter a valid input -> (Total Volume)");
        return false;
    }
    else if(fcTotalVolume.match(digits))
    {
        manyContainersFieldCount++;
    }


    if ((containerTypeDropdown == null || containerTypeDropdown == "") && singleContainerFieldCount==0)
    {  
        alert("Please Select a Container Type");
        return false;
    }
    else if(!(containerTypeDropdown == null || containerTypeDropdown == ""))
    {
        manyContainersFieldCount++;
    }


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
    var nothingHazardousCheckbox = document.getElementById('none-check');
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
    if(nothingHazardousCheckbox.checked && productCheckIndex>1)
    {
        alert("Confliciting Data -> (Product contents)");
        return false;
    }
    if(productCheckBlankCount>=4)
    {
        alert("Please Confirm your Product contents");
        return false;
    }

    const dateInput = document.getElementById("date-input").value;
    if (dateInput == null || dateInput == "")
    {  
        alert("Please Select a Date");
        return false;
    }

    //Displaying Entered Form Data on Console 
    console.log("Booking Name: "+ bookingName);
    console.log("Consignee: " + consigneeDropdown);
    console.log("Supplier: " + supplierDropdown);
    console.log("Incoterm: " + incoterm);

    if(singleContainerFieldCount>0)
    {
        console.log("Cargo Details: Less than one Container");
        console.log("Total Weight: " + totalWeight);
        console.log("Total Volume: " + totalVolume);
        console.log("Package Type: " + packageTypeDropdown);
        console.log("Total Quantity: " + totalQuantity);
    }
    if(manyContainersFieldCount>0)
    {
        console.log("Cargo Details: More than one Container");
        console.log("Number of Containers: "+ numberOfContainers);
        console.log("Container Type: " + containerTypeDropdown);
        console.log("Total Weight: " + fcTotalWeight);
        console.log("Total Volume: " + fcTotalVolume);
        console.log("Package Type: " + fcPackageTypeDropdown);
        console.log("Total Quantity: " + fcTotalQuantity);
    }
    
    console.log("Origin Address: " + originAddressDropdown);
    console.log("Port: " + portDropdown);
    console.log("Whether Opted for Flexport Service: " + flexportChoice);
    console.log("Destination Address: " + destinationAddressDropdown);
    console.log("Product Contains: " + productContent);
    console.log("Origin Cutoff Date: "+ dateInput);
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
