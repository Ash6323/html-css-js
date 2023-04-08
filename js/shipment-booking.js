function getFormValues() 
{
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

    console.log("Booking Name: "+ bookingName);
    console.log("Consignee: " + consigneeDropdown);
    console.log("Supplier: " + supplierDropdown);

}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() 
{
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() 
{
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) 
    {
        index = 0;
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) 
        {
            a[i].style.display = "";
            // filteredData[index++] = a[i];
            input.value=a[i].text;
        } 
        else 
        {
            a[i].style.display = "none";
        }
    }
    // document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
} 
