export let changeText = () => {
  if (window.pageYOffset >= 100) {
    return 'keep scrolling, there is still more to come.'
  } else {
    return 'scroll down to see more'
  }
}