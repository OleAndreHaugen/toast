// Toast Instance
const toasts = new Toasts();

// Options
// const toasts = new Toasts({
//     offsetX: 20, // 20px
//     offsetY: 20, // 20px
//     gap: 20, // The gap size in pixels between toasts
//     width: 300, // 300px
//     timing: 'ease', // See list of available CSS transition timings
//     duration: '.5s', // Transition duration
//     dimOld: true, // Dim old notifications while the newest notification stays highlighted
//     position: 'top-right' // top-left | top-center | top-right | bottom-left | bottom-center | bottom-right
// });

// Example Data
modelPage.setData({
    offsetY: 70,
    offsetX: 10,
    gap: 20,
    width: 300,
    timing: "ease",
    duration: 1,
    dimOld: true,
    position: "top-right",

    title: "My Title",
    content: "My notification content",
    style: "success",
    dismissAfter: 2,
    closeButton: true,
});

// Show New Toast
function showToast() {
    // Set New Options to override Toast Instance
    toasts.options.offsetY = modelPage.oData.offsetY;
    toasts.options.offsetX = modelPage.oData.offsetX;
    toasts.options.gap = modelPage.oData.gap;
    toasts.options.width = modelPage.oData.width;
    toasts.options.timing = modelPage.oData.timing;
    toasts.options.duration = modelPage.oData.duration + "s";
    toasts.options.dimOld = modelPage.oData.dimOld;
    toasts.options.position = modelPage.oData.position;

    // Create Message
    toasts.push({
        title: modelPage.oData.title,
        content: modelPage.oData.content,
        style: modelPage.oData.style,
        dismissAfter: modelPage.oData.dismissAfter + "s",
        closeButton: modelPage.oData.closeButton,
    });
}
