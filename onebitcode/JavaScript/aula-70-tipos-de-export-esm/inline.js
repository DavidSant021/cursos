export function inline() {
    console.log('Export nomeado inline')
}

export default function defaultInline() {  // só posso ter um por pág, e pode ser uma function anônima
    console.log('Export default inline')
}