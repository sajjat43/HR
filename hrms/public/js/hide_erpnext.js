// Hide ERPNext from application selector - Enhanced Version
frappe.ready(function() {
    console.log('🔧 Loading ERPNext hiding script...');

    // Function to hide ERPNext from app selector
    function hideERPNext() {
        console.log('🔍 Searching for ERPNext to hide...');

        // Method 1: Hide by data attributes
        const erpnextElements = document.querySelectorAll('[data-app-name="erpnext"], [data-app="erpnext"]');
        erpnextElements.forEach(function(element) {
            element.style.display = 'none';
            console.log('✅ Hidden ERPNext element by data attribute');
        });

        // Method 2: Hide by text content
        const allElements = document.querySelectorAll('*');
        allElements.forEach(function(element) {
            if (element.textContent && element.textContent.trim() === 'ERPNext') {
                // Check if it's in an app selector context
                const parent = element.closest('.app-selector-item, .dropdown-item, .app-item, [class*="app"]');
                if (parent) {
                    parent.style.display = 'none';
                    console.log('✅ Hidden ERPNext element by text content');
                }
            }
        });

        // Method 3: Hide specific app selector items
        const appItems = document.querySelectorAll('.app-selector-item, .dropdown-item, .app-item');
        appItems.forEach(function(item) {
            const text = item.textContent.trim();
            if (text === 'ERPNext' || text.includes('ERPNext')) {
                item.style.display = 'none';
                item.style.visibility = 'hidden';
                console.log('✅ Hidden ERPNext app item');
            }
        });

        // Method 4: Hide by icon or specific selectors
        const erpnextIcons = document.querySelectorAll('[class*="erpnext"], [id*="erpnext"]');
        erpnextIcons.forEach(function(icon) {
            const parent = icon.closest('.app-selector-item, .dropdown-item, .app-item');
            if (parent) {
                parent.style.display = 'none';
                console.log('✅ Hidden ERPNext by icon/class');
            }
        });
    }

    // Enhanced hiding function with multiple attempts
    function enhancedHideERPNext() {
        hideERPNext();

        // Try again after a short delay
        setTimeout(hideERPNext, 500);
        setTimeout(hideERPNext, 1000);
        setTimeout(hideERPNext, 2000);
    }

    // Run immediately
    enhancedHideERPNext();

    // Run when app selector is clicked
    $(document).on('click', '.app-selector, .app-selector-toggle', function() {
        setTimeout(enhancedHideERPNext, 100);
    });

    // Run when dropdown is opened
    $(document).on('show.bs.dropdown', function() {
        setTimeout(enhancedHideERPNext, 100);
    });

    // Run on page changes
    $(document).on('page:change', function() {
        enhancedHideERPNext();
    });

    // Run on DOM mutations (when new elements are added)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                setTimeout(enhancedHideERPNext, 100);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log('✅ ERPNext hiding script loaded successfully');
});

// CSS-based hiding as backup
frappe.ready(function() {
    const style = document.createElement('style');
    style.textContent = `
        /* Hide ERPNext from application selector */
        [data-app-name="erpnext"],
        [data-app="erpnext"],
        .app-selector-item:has-text("ERPNext"),
        .dropdown-item:has-text("ERPNext"),
        .app-item:has-text("ERPNext"),
        *:has-text("ERPNext") {
            display: none !important;
            visibility: hidden !important;
        }

        /* Additional selectors for ERPNext */
        .app-selector .dropdown-item[href*="erpnext"],
        .app-selector .dropdown-item[data-app*="erpnext"],
        .app-selector-item[data-app*="erpnext"] {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
    console.log('✅ ERPNext hiding CSS applied');
});
