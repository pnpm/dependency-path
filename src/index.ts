import encodeRegistry = require('encode-registry')

export function resolve (
  registryUrl: string,
  resolutionLocation: string
) {
  if (resolutionLocation[0] === '/') {
    const registryDirectory = encodeRegistry(registryUrl)
    return `${registryDirectory}${resolutionLocation}`
  }
  return resolutionLocation
}

export function refToAbsolute (
  reference: string,
  pkgName: string,
  registry: string
) {
  if (reference.indexOf('/') === -1) {
    const registryName = encodeRegistry(registry)
    return `${registryName}/${pkgName}/${reference}`
  }
  return reference
}

export function relative (
  standardRegistry: string,
  absoluteResolutionLoc: string
) {
  const registryName = encodeRegistry(standardRegistry)

  if (absoluteResolutionLoc.startsWith(`${registryName}/`)) {
    return absoluteResolutionLoc.substr(absoluteResolutionLoc.indexOf('/'))
  }
  return absoluteResolutionLoc
}

export function refToRelative (
  reference: string,
  pkgName: string
) {
  if (reference.indexOf('/') === -1) {
    return `/${pkgName}/${reference}`
  }
  return reference
}
