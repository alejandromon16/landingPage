import { c as create_ssr_component, e as escape, a as each, v as validate_component } from "../../chunks/index-57608c9a.js";
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"h-fit w-full text-center " + escape("") + " duration-500"}"><div class="${"animate__animated animate__backInRight"}"><h1 class="${"hover:underline-offset-8"}">${escape(data.title)}:</h1>
        <h1 class="${"font-bold text-lg hover:underline-offset-8 hover:scale-110 duration-500"}">${escape(data.info)}</h1>
        <h1>${escape(data.info2)}</h1></div></div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let datas = [
    {
      title: "Locations",
      info: "Santa Cruz",
      info2: "La Paz/Cochabamba/Oruro"
    },
    {
      title: "Contacts",
      info: "Info@londonst.net",
      info2: "(591)690-790-99"
    },
    {
      title: "Follow us",
      info: "fb:londonst",
      info2: "Ig:Londonst"
    }
  ];
  return `<img src="${"background/image.jpeg"}" alt="${""}" class="${"fixed h-90 w-auto lg:h-screen lg:w-screen -z-10 brightness-90 saturate-150"}">
<div class="${"fixed top-[230px] left-0 right-0 bottom-0 lg:inset-0 -z-0 bg-black lg:bg-opacity-20"}"></div>
<div class="${"absolute w-full pb-40"}"><div class="${"grid grid-cols-1 justify-items-center text-white "}"><div class="${"mt-10 lg:mt-40 text-center animate__animated animate__zoomIn"}"><h1 class="${"text-7xl"}">London St</h1>
            <h1 class="${"text-3xl mt-10 animate__animated animate__zoomIn animate__delay-1s"}">A Sensible excuse</h1>
            <h1 class="${"text-xl mt-10 animate__animated animate__zoomIn animate__delay-1s"}">Since July 13th, 1985</h1></div>
        <div class="${"grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-60 mt-14 overflow-hidden px-10"}">${each(datas, (data) => {
    return `${validate_component(Info, "Info").$$render($$result, { data }, {}, {})}`;
  })}</div></div>
</div>`;
});
export { Routes as default };
