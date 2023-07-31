type DebounceOption = {
  leading: boolean;
  maxWait: number;
}

const FUNC_ERROR_TEXT = 'Expected a function'

const nativeMax = Math.max
const nativeMin = Math.min

function isObject(value: any) {
  const type = typeof value
  return value != null && (type == 'object' || type == 'function')
}

function toNumber(value: any) {
  return Number.isFinite(value) ? value : Number(value)
}

function now() {
  return Date.now()
}

export function debounce(func: Function, wait: number, options?: DebounceOption) {
  let lastArgs: any
  let lastThis: any
  let maxWait: number | undefined
  let result: number
  let timerId: number | undefined
  let lastCallTime: number | undefined
  let lastInvokeTime = 0
  let leading = false
  let maxing = false
  let trailing = true

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT)
  }
  wait = toNumber(wait) || 0
  if (options && isObject(options)) {
    leading = !!options.leading
    maxing = 'maxWait' in options
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }

  function invokeFunc(time: number) {
    const args = lastArgs
    const thisArg = lastThis

    lastArgs = lastThis = undefined
    lastInvokeTime = time
    result = func.apply(thisArg, args)
    return result
  }

  function leadingEdge(time: number) {
    lastInvokeTime = time
    timerId = window.setTimeout(timerExpired, wait)
    return leading ? invokeFunc(time) : result
  }

  function remainingWait(time: number) {
    const timeSinceLastCall = time - lastCallTime!
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastCall
    return maxing ? nativeMin(timeWaiting, maxWait! - timeSinceLastInvoke) : timeWaiting
  }

  function shouldInvoke(time: number) {
    const timeSinceLastCall = time - lastCallTime!
    const timeSinceLastInvoke = time - lastInvokeTime
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait!))
  }

  function timerExpired() {
    const time = now()
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }
    timerId = window.setTimeout(timerExpired, remainingWait(time))
  }

  function trailingEdge(time: number) {
    timerId = undefined
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = lastThis = undefined
    return result
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId)
    }
    lastInvokeTime = 0
    lastArgs = lastCallTime = lastThis = timerId = undefined
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now())
  }

  function debounced(this: any) {
    const time = now()
    const isInvoking = shouldInvoke(time)

    // eslint-disable-next-line prefer-rest-params
    lastArgs = arguments
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    lastThis = this
    lastCallTime = time

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId)
        timerId = window.setTimeout(timerExpired, wait)
        return invokeFunc(lastCallTime)
      }
    }
    if (timerId === undefined) {
      timerId = window.setTimeout(timerExpired, wait)
    }
    return result
  }
  debounced.cancel = cancel
  debounced.flush = flush
  return debounced
}
