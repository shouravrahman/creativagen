export interface TEMPLATE {
  name: string,
  description:string,
  icon:any,
  category:string,
  slug:string,
  aiPrompt:string,
  href:string,
  form:Form[]
}

interface Form {
	label:string,
	field:string,
	name:string,
	required?:boolean
}