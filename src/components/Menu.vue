<template>
    <div id="menu">
      <section class="menu__section">
        <details
          class="menu__section__details"
          v-for="(section, indexSection) in menuSections"
          :key="indexSection"
        >
          <summary class="menu__section__details__summary">
            {{ section.name }}
          </summary>
          <ul class="summary__list">
            <li
              class="summary__list__item"
              v-for="(menuItem, menuItemIndex) in section.items"
              :key="menuItemIndex"
            >
              <a href="">{{ menuItem.name }}</a>
            </li>
          </ul>
        </details>
      </section>
    </div>
    <!-- menu-container -->
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  import type { PropType } from "vue";
  import MenuSection from "@/types/MenuSection";
  
  export default defineComponent({
    name: "Menu",
    props: {
      menuSections: {
        type: Array as PropType<MenuSection[]>,
      },
    },
    methods: {
      anchorFormate(anchor: string) {
        return `#${anchor}`;
      },
    },
    setup() {
      return {};
    },
  });
  </script>
  <style scoped lang="scss">
  #menu {
    .menu__section {
      .menu__section__details:first-child {
        border-radius: 6px 6px 0 0;
      }
      .menu__section__details:last-child {
        border-radius: 0 0 6px 6px;
      }
      .menu__section__details {
        border: 1px solid black;
        .summary__list {
          text-decoration: none;
          .summary__list__item {
            text-decoration: none;
            list-style: none;
            margin: 10px;
            a,
            a:hover,
            a:visited {
              text-decoration: none;
              color: black;
            }
          }
        }
        .menu__section__details__summary {
          padding: 10px 50px 10px 50px;
        }
      }
      .menu__section__details[open] .menu__section__details__summary {
        border-radius: 6px 6px 0 0;
        background-color: #e8eaed;
      }
    }
  }
  </style>
  